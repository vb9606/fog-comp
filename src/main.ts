import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense("Mgo+DSMBaFt+QHJqVk1hXk5Hd0BLVGpAblJ3T2ZQdVt5ZDU7a15RRnVfR11lSH1Qd0RgWnpWcA==;Mgo+DSMBPh8sVXJ1S0R+X1pFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jTH5Vd0ZgWH5dc3NSRg==;ORg4AjUWIQA/Gnt2VFhiQlJPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXtTcERgWn5fc3dcRGA=;MTk1MDQ5M0AzMjMxMmUzMjJlMzNhdTE1RUtVZ0VFd29OcnQ5VjhzcmxiSFNIdlN5QzM4OTF4TE5ISi9lRk1jPQ==;MTk1MDQ5NEAzMjMxMmUzMjJlMzNsKys0emZWVkFYU3ZxMnFMRTlqeDF0SmlWZVpvVUtGTFh5SWpjNUhVQVFZPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5WdkNiWnxfcXdRQ2lc;MTk1MDQ5NkAzMjMxMmUzMjJlMzNqeEgyUjNhazRFRW9yaXRqaTBmc001d3FzRFVlaGk0N3FGd0orY3R5R0VFPQ==;MTk1MDQ5N0AzMjMxMmUzMjJlMzNFcUhXQUVzNlJKVjJPMUM4a0wrY2lnNkh1UGc0ZlNvU1J4MU5iUGFodjlBPQ==;Mgo+DSMBMAY9C3t2VFhiQlJPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXtTcERgWn5fc3FXTmA=;MTk1MDQ5OUAzMjMxMmUzMjJlMzNoLzVkcFVvaWVjWWgrV0NsMzAxWUdicmJhUTE3aWlDRTJjaEtYb25aZzAwPQ==;MTk1MDUwMEAzMjMxMmUzMjJlMzNOMm9vaFFxMjVZT1l0NThGbnkxeXJMTDU1OXlvVFAxWS8rbm10cmxtYjZvPQ==;MTk1MDUwMUAzMjMxMmUzMjJlMzNqeEgyUjNhazRFRW9yaXRqaTBmc001d3FzRFVlaGk0N3FGd0orY3R5R0VFPQ==");

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
