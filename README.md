# F1yForms #
Accessible, styleable Form and field React components

## Components ##

### F1yForm ###
Top-level component. Wrap your fields in this fella.

```
<F1yForm 
  submit={func = () => null}
>
 ...
</F1yForm>
```

### F1yBasicField ###
The main go-to field for text, email, number, and other general single-line inputs. 

```
<F1yBasicField
  label={str = 'REQUIRED'}
  id={str = 'REQUIRED'}
  change={func = () => null}
  focus={func = () => null}
  blur={func = () => null}
  value={str = ''}
  description={str = ''}
  error={str = ''}
  type={str = 'text'}
/>
```
