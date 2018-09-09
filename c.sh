#!/bin/sh


# for i in 1 2 3 4 5 6 7 8 9
# do
# 	for i in 1 2 3 4 5 6 7 8 9
# 	do
# 		echo '123123'
# 		adb shell input tap 500 500
# 	done
# done


# adb shell

# 	echo '123123'
# 	input tap 500 500

# exit



adb shell
for i in 1 2 3 4 5 6 7 8 9 10
do
	for i in 1 2 3 4 5 6 7 8 9 10
	do
		for i in 1 2 3 4 5 6 7 8 9 10
		do
			echo "tap $i"
			input tap 500 500
		done
	done
done