import { makeAutoObservable } from 'mobx'

export default class storeOrder {
  constructor() {
    makeAutoObservable(this)
  }

  fields = [
    {
      name: 'email',
      label: 'Email',
      value: '',
      valid: false,
      pattern: /^.+@.+$/,
    },
    {
      name: 'phone',
      label: 'Phone',
      value: '',
      valid: false,
      pattern: /^\d{5,12}.+$/,
    },
    {
      name: 'name',
      label: 'Name',
      value: '',
      valid: false,
      pattern: /^.{2,}$/,
    },
  ]

  get isValid() {
    return this.fields.every((f) => f.valid)
  }

  get orderData() {
    const res = {}

    this.fields.forEach((field) => {
      res[field.name] = field.value
    })

    return res
  }

  update = (name, value) => {
    const inp = this.fields.find((field) => field.name === name)

    if (inp !== undefined) {
      inp.value = value.trim()
      inp.valid = inp.pattern.test(inp.value)
    }

    // this.fields = this.fields.map((field) => {
    //   if (field.name !== name) {
    //     return field
    //   }

    //   const valid = field.pattern.test(value)
    //   return { ...field, value, valid }
    // })
  }
}
