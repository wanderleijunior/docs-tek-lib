# Configurações

## Environments (variáveis)

Os arquivos `environments` eram e continuam sendo onde se configura variáveis de ambiente. Para quem já usava o módulo de login para autenticar e para quem vai iniciar um novo projeto as configurações são as mesmas. 

A diferença fica por conta da propriedade `routePath` definida na propriedade `login`. Essa rota define qual rota a tela de login deverá ser renderizada.  Com o módulo de login era obrigatório que o nome fosse `/modules/login/autenticacao`. Agora você pode definir o nome que preferir. Vamos usar `/login` para seguir com o tutorial.

Examplo de uso com autenticação feita pelo módulo.
```json
{
	"modules": {
		"login": {
			"baseUrl": "http://localhost:8081",
			"routePath": "/modules/login/autenticacao",
			"backgroundImgUrl": "http://localhost:8080/assets/img/teknisa-login-background.jpg",
			"endPoint": "http://localhost:9000/om-next/modules/login/backend/service/index.php"
		}
	}
}
```

Examplo de uso com autenticação feita pela biblioteca TekAuth.
```json
{
	"modules": {
		"login": {
			"baseUrl": "http://localhost:8081",
			"routePath": "/login",
			"backgroundImgUrl": "http://localhost:8080/assets/img/teknisa-login-background.jpg",
			"endPoint": "http://localhost:9000/om-next/modules/login/backend/service/index.php"
		}
	}
}
```

## Registro do componentes

É necessário importar e registrar os componentes.  
Isso será feito no aquivo de configuração `zeedhi.ts` que fica dentro da pasta `plugin`.  
  
```ts  
import TekLibComponents from '@zeedhi/tek-lib';  
  
Vue.use(TekLibComponents);  
```  
  
Após essas etapa o(s) componente(s) da TekLib estarão disponível para uso na sua aplicação.  

## Rota de Login

#####  routes.ts   
Crie uma nova rota para a tela de login  
  
```ts  
...  
{  
    path: '/login',  
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