# Makefile
.phony: server
server:
 	# WARNING: The indentation MUST be a tab. Spaces won't work.
	./node_modules/.bin/browser-sync start --server --files=index.html
