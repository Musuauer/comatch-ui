set -ex

if [ "$1" != major ] && [ "$1" != minor ] && [ "$1" != patch ]; then
    echo "Must provide: 'major', 'minor' or 'patch' as argument"
    exit 1
fi

releaseType=$1

# This will run the tests and push the tags to Github
npm version $releaseType -m "Upgrade to %s"

# Publish the upgraded package
npm publish