# Makefile
.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.phony: server
server:
 	# WARNING: The indentation MUST be a tab. Spaces won't work.
	./node_modules/.bin/browser-sync start --server --files='index.html,bundle/app.css'

.phony: clean
clean:
	rm -r bundle
