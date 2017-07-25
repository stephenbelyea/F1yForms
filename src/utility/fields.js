export const provinceOptions = [
  { id: 1, value: 'AB', label: 'Alberta' },
  { id: 2, value: 'BC', label: 'British Columbia' },
  { id: 3, value: 'MB', label: 'Manitoba' },
  { id: 4, value: 'NB', label: 'New Brunswick' },
  { id: 5, value: 'NL', label: 'Newfoundland and Labrador' },
  { id: 6, value: 'NW', label: 'Northwest Territories' },
  { id: 7, value: 'NS', label: 'Nova Scotia' },
  { id: 8, value: 'NU', label: 'Nunavut' },
  { id: 9, value: 'ON', label: 'Ontario' },
  { id: 10, value: 'SK', label: 'Saskatchewan' },
  { id: 11, value: 'QC', label: 'Quebec' },
  { id: 12, value: 'YU', label: 'Yukon' }
]

export const demoFields = {
  fname: '',
  lname: '',
  email: '',
  phone: '',
  city: '',
  province: '',
  residence: '',
  amenities: [],
  instructions: ''
}

export const demoErrors = {
  ...demoFields, 
  amenities: ''
}