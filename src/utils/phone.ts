function IntlFormat(_phone: string) {
  const phone = _phone.split('');
  phone[0] = '+234';
  return phone.join('');
};

function LocalFormat(_phone: string) {
  const phone = _phone.split('').slice(4);
  return `0${phone.join('')}`
}

export { IntlFormat, LocalFormat };
