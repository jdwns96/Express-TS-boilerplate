# Express typescript boilerplate

### npm install list

> npm i typescript ts-node-dev nodemon express @types/express @types/node

```
typescript    # ts compiler tsc
ts-node-dev   # ts 실행기
express @types/express    # express, ts-express
@types/node
nodemon
```

### tsconfig

```
tsc --init
```

해당 명령어를 실행시 `tsconfig.json` 파일이 생성된다.  
이중 `"outDir": "./build"` 옵션과 `"rootDir": "./app"` 설정 해준다.
