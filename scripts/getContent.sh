#!/usr/bin/env bash
#title           :getContent.sh
#description     :This script download access content from github and delete useless files
#author          :Laurent Caouissin & Eric Thuaud
#==============================================================================

set -e

CONTENT_URL="$1"
USE_INSEE_PROXY="$2"



function setUpInseeProxy(){
    echo "Set Insee Proxy"
    export http_proxy="$INSEE_HTTP_PROXY"
    export https_proxy="$INSEE_HTTPS_PROXY"
}

function setUp(){
    if [ "$USE_INSEE_PROXY" = true ]
    then 
        setUpInseeProxy
    fi
}

function downloadContentAndUnZip(){
    echo "Download content zip from GitHub"
    curl -L $CONTENT_URL -o content.zip 
    echo "Unzip content"
	mkdir contentDir
    unzip content.zip -d contentDir
	rm src/resources/content.json
	cp contentDir/content.json src/resources/content.json
	rm -rf public/img
	cp -r contentDir/img public
	find contentDir -type f \( -iname "*.png" \) -exec cp '{}' public \;
	ls public
	ls public/img
}


function main(){
    setUp && downloadContentAndUnZip
}

main
