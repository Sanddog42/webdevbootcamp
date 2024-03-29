
** Note about installing and running MongoDB
** Section 27, Lecture 252

Hi Everyone!

A new step has been added to get MongoDB installed and running on c9, 
before you run the 3 commands from the following video lecture, 
you'll first need to run 

      sudo apt-get install -y mongodb-org 

from your terminal in c9.

Further instructions can be found 
here (https://community.c9.io/t/setting-up-mongodb/1717).

Meanwhile, after you're up and running with mongo, be sure 
to shut down your mongod server each time you're done working. 
You can do this with 

    ctrl + c 

If you leave it running then Cloud 9 could timeout 
and cause mongo to crash. If this happens, try the
following steps to repair it. 

From the command line, run:

    1   |    cd ~   
    2   |   ./mongod --repair

If you're still having trouble getting it to run 
then find the /data directory (it should be inside of ~ or ~/workspace) 
and cd into it. 

Once inside, run 

    rm mongod.lock 

then cd back into ~ and run ./mongod again (see below).

    1   |    cd ~/data
    2   |    rm mongod.lock
    3   |    cd
    4   |    ./mongod

If you continue to have difficulties with this then please 
open up a new discussion so we can assist you.

Thanks,
Ian
Course TA


