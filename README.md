# F1yForms #

Accessible, styleable form and field React components. Intentionally stateless for your change, focus, blur, and validation logic needs at the container component level.


## How To Use? ##

For now, grab the `f1yforms` directory and dump it into your `components` (super high quality, I know), then import into your app with:

```
import { F1yForm } from './path/to/components/F1yForms'
```

You'll want to at least import the main `F1yForm` parent, with any additional components (listed below) included in the curly braces as needed.


## Components ##

### F1yForm ###

Top-level component. Wrap your fields in this fella. If you want a custom wrapper class, feed a string to the `styling` prop. Children wrapped in the `F1yForm` will be spit out on render.

```
<F1yForm 
  submit={func = () => null}
  styling={str = 'simple'}
>
 {children}
</F1yForm>
```


### F1yFieldset ###

Wrap sets of dependant fields (checkboxes, radios) in the fieldset to keep options contextually related. Use the `legend` prop to label the group of fields.

```
<F1yFieldset 
  legend={str = ''}
>
 {children}
</F1yFieldset>
```


### F1yField ###

The main go-to field for text, email, number, and other general single-line inputs. Always feed it a `label` and `id` at minimum. The `change`, `focus`, and `blur` props fire from the field's equivalent event methods -- use these to run a `setState` call passed from the container.

```
<F1yField
  label={str = 'REQUIRED'}
  id={str = 'REQUIRED'}
  change={func = () => null}
  focus={func = () => null}
  blur={func = () => null}
  value={str = ''}
  description={str = ''}
  error={str = ''}
  type={str = 'text'}
  required={bool = false}
  disabled={bool = false}
/>
```


### F1yTextArea ###

Mostly the same properties as the `F1yField` (minus `type`), but with more square footage for longer content. As with `F1yField`, `label` and `id` are required props (you'll see this come up a lot). 

```
<F1yTextArea
  label={str = 'REQUIRED'}
  id={str = 'REQUIRED'}
  change={func = () => null}
  focus={func = () => null}
  blur={func = () => null}
  value={str = ''}
  description={str = ''}
  error={str = ''}
  required={bool = false}
  disabled={bool = false}
/>
```


### F1ySelect ###

```
<F1ySelect
  label={str = 'REQUIRED'}
  id={str = 'REQUIRED'}
  change={func = () => null}
  focus={func = () => null}
  blur={func = () => null}
  value={str = ''}
  description={str = ''}
  error={str = ''}
  required={bool = false}
  disabled={bool = false}
>
  {children}
</F1ySelect>
```


### F1ySelectOption ###

```
<F1ySelectOption
  label={str = ''}
  value={str = ''}
  disabled={bool = false}
/>
```


### F1yRadio ###

```
<F1yRadio
  label={str = 'REQUIRED'}
  name={str = 'REQUIRED'}
  id={str = 'REQUIRED'}
  change={func = () => null}
  focus={func = () => null}
  blur={func = () => null}
  value={str = ''}
  description={str = ''}
  error={str = ''}
  required={bool = false}
  disabled={bool = false}
  checked={bool = false}
/>
```


### F1yCheckbox ###

```
<F1yCheckbox
  label={str = 'REQUIRED'}
  name={str = 'REQUIRED'}
  id={str = 'REQUIRED'}
  change={func = () => null}
  focus={func = () => null}
  blur={func = () => null}
  value={str = ''}
  description={str = ''}
  error={str = ''}
  required={bool = false}
  disabled={bool = false}
  checked={bool = false}
/>
```


### F1ySubmit ###

```
<F1ySubmit
  label={str = 'REQUIRED'}
  submit={func = () => null}
  disabled={bool = false}
/>
```