## Custom component libraries template

Use this as a base for new custom component library projects within [Retool](https://www.retool.com).

To learn more about how custom component libraries work, visit our [official documentation](https://docs.retool.com/apps/web/guides/components/develop-custom-components/custom-components-beta).


### Notes

Creating Retool Custom Component in React - [Official Retool Doc.](https://docs.retool.com/apps/web/guides/components/develop-custom-components/custom-components-beta)

Dependencies
❯ node -v	v20.12.2
❯ npm -v	10.5.0


1. Log in to Retool

```npx retool-ccl login```

2. Create a component library

```npx retool-ccl init```

3. Start dev mode

```npx retool-ccl dev```

4. Deploy your component

```npx retool-ccl deploy```

Switch component versions

```
Settings -> Custom components -> Library(Used in App), select dropdown
```


Expand your library ( READ )
You can add multiple custom components to your library by exporting more React components from src/index.tsx (only components exported from this file are detected). You can also create multiple libraries by creating a separate repository and following this guide again.

### Not to be mistaken with [Legacy custom components](https://docs.retool.com/apps/web/guides/components/develop-custom-components/custom)
