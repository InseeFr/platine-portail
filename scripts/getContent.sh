#!/usr/bin/env bash
#title           :getContent.sh
#description     :This script download access content from github and delete useless files
#author          :Laurent Caouissin & Eric Thuaud
#==============================================================================

set -e

CONTENT_URL="$1"
USE_INSEE_PROXY="$2"
CONTENT_FILE_NAME=$(basename -s .zip $CONTENT_URL)
ORBEON_SOURCE_FOLDER=orbeon-source



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
    unzip content.zip $CONTENT_FILE_NAME/orbeon.war
    rm -rf content.zip
    mkdir $ORBEON_SOURCE_FOLDER && unzip $ORBEON_FILE_NAME/orbeon.war -d $ORBEON_SOURCE_FOLDER
    rm -rf $ORBEON_FILE_NAME
}


function main(){
    setUp && downloadContentAndUnZip
}

main
