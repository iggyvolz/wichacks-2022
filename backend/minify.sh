#!/bin/sh
test -d "$2/lib" || mkdir -p "$2/lib"
test -d "$2/bin" || mkdir -p "$2/bin"
cp "$1" "$2/bin/`basename $1`"
for lib in `ldd $1|awk '{print $1;}'`; do
    if test `echo "$lib" | grep -E '^/'`; then
        cp "$lib" "$2/lib/`basename $lib`"
    fi
done

for lib in `ldd $1|awk '{print $3;}'`; do
    if test `echo "$lib" | grep -E '^/'`; then
        cp "$lib" "$2/lib/`basename $lib`"
    fi
done
