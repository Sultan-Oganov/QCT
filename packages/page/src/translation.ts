export const translationDict: Record<string, string> = {
  // Common
  common: 'Общее',
  'Internal Server Error': 'Внутренняя ошибка сервиса',
  All: 'Все',
  'Invalid user credentials': 'Неверный e-mail или пароль',
  "You don't have permission to access this":
    'У вас нет разрешения на доступ к этому действию',
  'Signature is not valid': 'Подпись не верна',
  process: 'Обрабатывается',
  success: 'Успешно',
  failure: 'Ошибка',
  'Already exists': 'Уже добавлено',
  true: 'Да',
  false: 'Нет',
  'Cannot be deleted. Check dependent entries.':
    'Невозможно удалить. Проверьте зависимые записи.',
  'The entry must be unique.': 'Это название уже используется',

  // Form
  'field required': 'Поле обязательно',
  'value is not a valid uuid': 'Поле обязательно',
  'value is not a valid email address': 'Email должен быть заполнен верно',
  'value is not a valid integer': 'Значение не является числом',
  'ensure this value has at least 1 characters': 'Поле обязательно',
  'ensure this value has at most 43 characters':
    'Убедитесь, что это значение не больше 43 символов',
  '(0) Missing or invalid default region.':
    'Номер телефона с "+" и кодом страны/региона',
  '(1) The string supplied did not seem to be a phone number.':
    'Строка не похожа на номер телефона',
  'mast be phone number': 'Должен быть номер телефона',
  'Max length for the name shold be 255 symbols':
    'Максимальная длина имени должна быть 255 символов',
  'Crop me': 'Обрежь меня',
  'ensure this value is greater than or equal to 0':
    'Убедитесь, что это значение больше или равно 0',
  'ensure this value has at most 255 characters':
    'Убедитесь, что это значение имеет не более 255 символов',
  'ensure this value has at most 254 characters':
    'Убедитесь, что это значение имеет не более 254 символов',
  "Expected UploadFile, received: <class 'str'>":
    'Файл или URL-адрес заполнены неверно',
  'TypeError: Failed to fetch': 'Ошибка при загрузке',
  'file size should be smaller': 'Размер файла должен быть меньше',
  'Password should have at least one numeral':
    'Пароль должен содержать хотя бы одну цифру',
  'Password should have at least one uppercase letter':
    'Пароль должен содержать хотя бы одну заглавную букву',
  'Password should have at least one lowercase letter':
    'Пароль должен содержать хотя бы одну строчную букву',
  'Password should not be similar to register data':
    'Пароль не должен совпадать с регистрационными данными',
  'User exists with same username': 'E-mail уже используется',
  '(0) Could not interpret numbers after plus-sign.':
    '(0) Невозможно интерпретировать числа после знака плюс.',
  'Access Token already used.':
    'Ссылка больше не действительна. Вы можете использовать ссылку на сброс пароля только один раз',
  'You cannot reset your password more than once every 5 minutes.':
    'Сброс пароля доступен раз в 5 минут',
  'Record not found: ResetPassword':
    'Ссылка для сброса пароля более недействительна',
  'User not found': 'Пользователь не найден',
  //Metamask
  'Connect wallet': 'Подключить кошелек',
  Connect: 'Подключить',
  'Wallet connected': 'Подключено',
  'Wallet address': 'Адрес кошелька',
  Balance: 'Баланс',
  'Get balance': 'Получить баланс',
  'Need to install Metamask': 'Нужно установить Metamask',
  ether_mainnet: 'Ethereum Main',
  bsc_mainnet: 'Binance Main',
  ether_test_goerli: 'Ethereum Test Goerli',
  ether_test_sepolia: 'Ethereum Test Sepolia',
  bsc_testnet: 'Binance Test',
  Title: 'Заголовок',

  // B-CH
  'Increase price':
    'Недопустимая сумма перевода, пожалуйста увеличьте сумму перевода',

  // CloudPayments
  'CloudPayments: Script loading error':
    'Ошибка в подключении к системе CloudPayments. Проверьте соединение или попробуйте воспользоваться VPN',
  'CloudPayments: User has cancelled':
    'Пользователь отменил оплату, попробуйте еще раз.',
  'CloudPayments: error': 'Ошибка при оплате.',

  // Transactions
  'productType.any': 'Оплата',
  'productType.course': 'Обучение',
  'productType.stake': 'Стейкинг',
  'productType.transfer': 'Перевод',
  cloud_payments_kz: 'Cloud Payments',
  'Choose one of the payment systems.': 'Выберите одну из платёжных систем.',
};
