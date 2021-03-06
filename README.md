# syonet_eight

## Settings

```
git clone https://github.com/igara/syonet_eight.git --recursive
# --recursive をつけ忘れた際は下記を実行
(cd syonet_eight && git submodule update --init もしくは git submodule update --init --remote projects/syonet_eight_www)

cd syonet_eight

cp .env.sample .env.development
cp .env.sample .env.production

# edit .env
code .env.development
code .env.production

npm i -g yarn@1.22.5

yarn
```

## start development

```
yarn dev
```

## design_system

### build

```
yarn build:design_system
yarn reflash
```

### Figma Import

```
yarn import:figma
```

## template script

```
yarn templates path=projects/syonet_eight_design_system/src/components/xxxx/yyyy
or
yarn templates path=projects/syonet_eight_www/src/components/xxxx/yyyy
```

## test & lint

```
yarn lint
yarn test
```

## storybook

```
yarn storybook
```

## https://www.syonet.work

resource: https://github.com/igara/syonet_eight_www

already setting aws config.

### deploy & destroy

from [vercel dashboard](https://vercel.com/dashboard)

## https://ogp.syonet.work

### deploy & destroy

```
# use make command linux terminal(WSL)
yarn zip:chrome_aws_lambda
yarn build:chrome_aws_lambda
yarn reflash

yarn create:domain:ogp
yarn deploy:ogp
```

```
yarn destroy:ogp
yarn delete:domain:ogp
```

## algolia

### local

```
yarn dev:algolia
yarn run:development:algolia [www_page...lambda function]
```

### production

```
yarn deploy:algolia
yarn run:production:algolia
```

## https://storybook.syonet.work

already settings provider aws in [Serverless Dashboard](https://app.serverless.com/) and create cloudformation stack.

### deploy & destroy

```
yarn build:storybook
yarn deploy:storybook
```

```
yarn destroy:storybook
```
