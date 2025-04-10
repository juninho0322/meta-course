## // UNIX COMMANDS

--- cd ------ change directory
--- ls ------ show content ---- -a shows all hidden folder / files
--- pwd ----- shows the full path of the current directory
--- cp ------ copy command
--- mv ------ move command
--- touch --- create a new file.... e.g touch example.txt
--- mkdir --- create a new folder-- e.g mkdir examples-docs
--- history - view the list of the last commands used
--- man ----- shows the manual for each command e.g man cd, man ls
--- cat ----- returns the content of the file
--- wc ----- returns the word count in the file --- use -w as a flag

## // REDIRECTION

> input... e.g cat > file.txt "insert our text " CTRL + D to exit
> < output

every linux command output a data, if you need to redirect this output to a specific file use

e.g -- command > output.txt --- ls -l > output.txt

## // GREP - global regular expression print

grep l names.txt - list the names which starts with letter l for example. "grep is case sensitive l and L differs

the flag -i ignore the case sensitive
grep -i Ui names.txt "this display all names which contains ui"

the flag -w returns the exact match
grep -w Ui names.txt "would this only Ui if there is one the list"

use to searh for directories / files / and texts

## // FLAGS

-- every bash command has flags for changing the output of the command itself

** -l ** print as a list
