# Configurações (Produtos Existentes)

Nota: *<span style="color: #777;">Se você iniciou seu projeto com o Teknisa CLI versão (colocar_versao) esse tuturial não é necessário.</span>*

Produtos que foram criados com versões anteriores do Teknisa CLI terão algumas modificações no código.

**Lista de arquivos a serem criados.**
- `public/metadata/login.json`
- `src/controllers/LoginController.ts`

**Lista de arquivos a serem modificados.**
- `src/config/devEnvironment.json`
- `src/plugins/zeedhi.ts`
- `src/router.ts` ou `src/router/routes.ts` e `src/router/index.ts`
- `src/controllers/index.ts`
- `src/controllers/AppController.ts`
- `src/views/Microservice.ts`
- `App.vue`

## Tela de Login

Crie os arquivos ( json e controller ) para que a tela de login faça parte do seu projeto.
Siga o tutorial explicado na seção **Componentes** [TekLogin](/components/login.html).

## Config.ts

Após criar os arquivos verifique se seu arquivo `Config.ts` tem as propriedades do exemplo abaixo.

```ts
...
env: {
    product: env.product,
    baseUrl: env.baseUrl,
    modules: env.modules,
    loginRoutePath: env.modules.login.routePath,
    loginBackgroundImgUrl: env.modules.login.backgroundImgUrl,
    loginEndPoint: env.modules.login.endPoint,
  },
...
```
Nota: **Para um funcionamento correto é necessário que tenha todas essas propriedades no arquivo `config.ts`*

Exemplo de arquivo `Config.ts`.

```ts
import { IConfig } from '@zeedhi/core';
import prodEnvironment from './prodEnvironment.json';
import devEnvironment from './devEnvironment.json';

const env = process.env.NODE_ENV === 'production' ? prodEnvironment : devEnvironment;

const config: IConfig = {
  endPoint: env.endPoint,
  metadataEndPoint: env.metadataEndPoint,
  env: {
    product: env.product,
    baseUrl: env.baseUrl,
    modules: env.modules,
    loginRoutePath: env.modules.login.routePath,
    loginBackgroundImgUrl: env.modules.login.backgroundImgUrl,
    loginEndPoint: env.modules.login.endPoint,
  },
};

export default config;

```
## Environments

Os arquivos environments continuam sendo configurados da mesma forma. Apenas o valor da propriedade `routePath` deve ser alterado conforme explicado na seção **Configirações** [Environments](/guia/configuration.html#environments-variaveis).

## Registro dod componentes

É necessário importar e registrar os componentes.  
Isso será feito no aquivo de configuração `zeedhi.ts` que fica dentro da pasta `plugin`.  
  
```ts  
import TekLibComponents from '@zeedhi/tek-lib';  
  
Vue.use(TekLibComponents);  
```  
  
Após essas etapa o(s) componente(s) da TekLib estarão disponível para uso na sua aplicação.  

## Rota de Login

`router.ts` ou `router/routes.ts`   
Crie uma nova rota para a tela de login  
  
```ts  
...  
{  
    path: '/auth/login',  
    name: 'login',  
    component: ZdPage,  
    props: () => ({  
        path: 'login',  
        local: true,  
    }),  
}  
...  
```  
*Nota: A propriedade `path` tem que ter o mesmo valor que a propriedade `routePath` definida nos arquivos environment.*

## Serviços

Locais que importam e usam os Serviços da **TekLib** precisam ter os nomes alterados.

Listamos os arquivos que serão necessário as alterações.
- `src/router.ts`ou `src/router/routes.ts` e `src/router/index.ts`
- `src/controllers/AppController.ts`
- `src/views/Microservice.ts`
- `App.vue`

### Alterações

#### LocalStorage

antes:
```ts
import { LibLocalStorage } from '@zeedhi/tek-lib';
```

depois:
```ts
import { TekLibLocalStorage } from '@zeedhi/tek-lib';
```

#### Auth

antes:
```ts
import { LibAuth } from '@zeedhi/tek-lib';
```

depois:
```ts
import { TekLibAuth } from '@zeedhi/tek-lib';
```

#### Auth uso

antes:
```ts
LibAuth.getInstance().startLib();
```

depois:
```ts
TekLibAuth.startLib();
```

Os métodos da classe `TekLibAuth` devem ser chamados diretamente sem a necessidade do `getInstance()`.

## Teknisa CLI

o código atual do **[Teknisa CLI](#)** pode e deve ser consultado para esclarecer como seu código deve ficar.



