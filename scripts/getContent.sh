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
    echo "Unzip orbeon"
	mkdir contentDir
    unzip content.zip -d contentDir
    cd contentDir
	ls
	cd ..
	ls
}


function main(){
    setUp && downloadContentAndUnZip
}

main
