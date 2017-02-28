TESTS = test/*.js

all: test

test:
	npm install .
	@./node_modules/mocha/bin/mocha \
		$(TESTS)

.PHONY: test
