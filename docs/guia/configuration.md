# Configurações

## Environments (variáveis)

Os arquivos `environments` eram e continuam sendo onde se configura variáveis de ambiente. Para quem já usava o módulo de login para autenticar e para quem vai iniciar um novo projeto as configurações são as mesmas. 

A única mudança é o valor da propriedade `routePath` definida na propriedade `login`. Essa rota define qual rota a tela de login deverá ser renderizada. 

Com o módulo de login era obrigatório que o valor fosse `/modules/login/autenticacao`. Agora você pode definir o nome que preferir. Vamos usar `/auth/login` para seguir com o tutorial.

Exemplo de uso com autenticação feita pelo módulo.
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

Exemplo de uso com autenticação feita pela biblioteca TekLib.
```json
{
	"modules": {
		"login": {
			"baseUrl": "http://localhost:8081",
			"routePath": "/auth/login",
			"backgroundImgUrl": "http://localhost:8080/assets/img/teknisa-login-background.jpg",
			"endPoint": "http://localhost:9000/om-next/modules/login/backend/service/index.php"
		}
	}
}
```
Os demais valores continuam sendo preenchido da mesma forma.

Exemplo de arquivo `devEnvironment.json`.

```json
{
	"endPoint": "http://localhost:9000/om-next/backend/service/index.php",
	"metadataEndPoint": "",
	"baseUrl": "/",
	"product": {
		"id": "5615",
		"name": "OM",
		"url": "http://localhost:8080",
		"logoUrl": "http://localhost:8080/assets/img/teknisa.png",
		"sessionTime": "9999999",
		"modulesThemeColor": "#2d68c3"
	},
	"modules": {
		"login": {
			"baseUrl": "http://localhost:8081",
			"routePath": "/auth/login",
			"backgroundImgUrl": "http://localhost:8080/assets/img/teknisa-login-background.jpg",
			"endPoint": "http://localhost:9000/om-next/modules/login/backend/service/index.php"
		}
	}
}
