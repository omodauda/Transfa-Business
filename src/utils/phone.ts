function IntlFormat(_phone: string) {
  const phone = _phone.split('');
  phone[0] = '+234';
  return phone.join('');
};

export default IntlFormat;
