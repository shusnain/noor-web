# UI Component Guidelines

This project uses **Base UI** (`@base-ui-components/react`) for unstyled components and **Tailwind CSS** for styling.

## Import Pattern

```tsx
import { Button } from '@base-ui-components/react/button';
import { Input } from '@base-ui-components/react/input';
import { Checkbox } from '@base-ui-components/react/checkbox';
import { Dialog } from '@base-ui-components/react/dialog';
import { Field } from '@base-ui-components/react/field';
```

## Styling with Tailwind CSS

Apply Tailwind classes directly via the `className` prop. Use data attribute selectors for state-based styling:

```tsx
<Button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 data-[disabled]:opacity-50">
  Click me
</Button>
```

## Data Attributes Reference

| Attribute | Description |
|-----------|-------------|
| `data-disabled` | Element is disabled |
| `data-checked` | Checkbox/Switch is checked |
| `data-unchecked` | Checkbox/Switch is unchecked |
| `data-indeterminate` | Checkbox mixed state |
| `data-valid` | Input/Field is valid |
| `data-invalid` | Input/Field is invalid |
| `data-dirty` | Value has changed |
| `data-touched` | Element has been focused |
| `data-filled` | Input contains a value |
| `data-focused` | Element is focused |
| `data-popup-open` | Popup/dialog is open |

## Component Patterns

### Button

```tsx
<Button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed">
  Submit
</Button>
```

### Input with Field (for accessibility)

```tsx
<Field.Root>
  <Field.Label className="block text-sm font-medium mb-1">Email</Field.Label>
  <Input className="w-full px-3 py-2 border rounded data-[focused]:ring-2 data-[focused]:ring-blue-500 data-[invalid]:border-red-500" />
  <Field.Error className="text-sm text-red-500 mt-1" />
</Field.Root>
```

### Checkbox

```tsx
<Field.Root>
  <div className="flex items-center gap-2">
    <Checkbox.Root className="w-5 h-5 border rounded data-[checked]:bg-blue-600 data-[checked]:border-blue-600">
      <Checkbox.Indicator className="flex items-center justify-center text-white">
        ✓
      </Checkbox.Indicator>
    </Checkbox.Root>
    <Field.Label className="text-sm">Accept terms</Field.Label>
  </div>
</Field.Root>
```

### Dialog

```tsx
<Dialog.Root>
  <Dialog.Trigger className="px-4 py-2 bg-blue-600 text-white rounded">
    Open Dialog
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Backdrop className="fixed inset-0 bg-black/50" />
    <Dialog.Popup className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-xl">
      <Dialog.Title className="text-lg font-semibold">Title</Dialog.Title>
      <Dialog.Description className="text-gray-600 mt-2">Description</Dialog.Description>
      <Dialog.Close className="mt-4 px-4 py-2 bg-gray-200 rounded">Close</Dialog.Close>
    </Dialog.Popup>
  </Dialog.Portal>
</Dialog.Root>
```

## Key Rules

1. Always import from `@base-ui-components/react/[component]`
2. Use Tailwind's `data-[attr]:` syntax for state-based styles
3. Wrap form inputs with `Field.Root` for accessible labels and error handling
4. Use `Field.Label` instead of plain `<label>` for automatic association
5. Multi-part components (Dialog, Select, etc.) require assembling subcomponents
