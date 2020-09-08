import { extend } from 'vee-validate';
import { required, email, min, max } from 'vee-validate/dist/rules';

import { localize } from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru.json';

localize('ru', ru);

extend('required', required);
extend('email', email);
extend('min', min);
extend('max', max);
