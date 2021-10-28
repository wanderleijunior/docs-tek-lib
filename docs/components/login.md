# TekLogin

### Json

*Nota: As propriedades `backgroundStyle` , `logo` e `endPoint` devem ser informadas através de `Accessor` criados no controller.*
  
```json  
{  
  "name": "loginPage",  
  "component": "TekLogin",  
  "backgroundStyle": "{{LoginController.backgroundImgUrl}}",  
  "logo": "{{LoginController.logo}}",  
  "endPoint": "{{LoginController.endPoint}}"  
}

```

### Controller
  
```ts
import { Config, Singleton } from '@zeedhi/core';  
  
@Singleton  
export class LoginController {  
  get logo() {  
    return Config.env.product.logoUrl;  
  }  
  
  get backgroundImgUrl() {  
    const url = Config.env.loginBackgroundImgUrl;  
    return `url(${url})`;  
  }
 
  get endPoint() {  
    return Config.env.loginEndPoint;  
  }
}

```  
Nota: *\*Os valores devem ser obtidos através do serviço `Config` do `@zeedhi\core`. Partindo do pressuposto que o seu produto foi criado com o `Teknisa CLI`, as propriedades exemplificadas acima estará disponível no `Config` assim  que você preencher o(s) arquivo(s) environments (`devEnvironment.json` e `prod.environment.json`).*

Nota: *\*\*Lembre-se de registrar seu controller no arquivos `controllers/index.ts`.*

#### Propriedades

- A propriedade `endPoint` indica a url base do backend em que o componente de login irá fazer as requisições.  

- As demais propriedades podem ser consultadas na documentação do componente `ZdLogin` já que o `TekLogin` estende o mesmo.
  