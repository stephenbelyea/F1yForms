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


### F1yFieldset ###
Wrap sets of dependant fields (checkboxes, radios) in the fieldset to keep options contextually related.

```
<F1yFieldset 
  legend={str = ''}
>
 ...
</F1yFieldset>
```


### F1yField ###
The main go-to field for text, email, number, and other general single-line inputs. 

For the `styling` property, use "simple" or "slick".

```
<F1yField
  label={str = 'REQUIRED'}
  id={str = 'REQUIRED'}
  change={func = () => null}
  focus={func = () => null}
  blur={func = () => null}
  required={bool = false}
  value={str = ''}
  description={str = ''}
  error={str = ''}
  type={str = 'text'}
  styling={str = 'simple'}
/>
```