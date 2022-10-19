### AST
https://astexplorer.net/

### GET BABEL
```
npm i @babel/parser @babel/traverse
npm i --save-dev @types/babel__traverse
```

### Only compile src
in `tsconfig.json`
```json
	"include": [
		"src/**/*"
	]
```

### Test
check AST
```
npm test
```