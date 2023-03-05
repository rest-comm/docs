---
sidebar_position: 3
---

# Essential Hooks

The `common/hooks` directory contains 2 essential hooks frequently used in web frontend development - `useAlert` and `useFetch` hook.


## `useAlert` Hook

A hook that standardises how alerts are shown globally, as well as how alert components' state are managed.

### Usage

`useAlert` hook returns a object consisting of `AlertComponent`, `showAlert`, and `hideAlert`:
```typescript
// using the hook
const { AlertComponent, showAlert, hideAlert } = useAlert();


return (
  <>
    <AlertComponent /> // alert component

    <Button onClick={() => showAlert()} /> // show alert component
    <Button onClick={() => hideAlert()} /> // hide alert component
  </>
)
```

<br />

## `useFetch` Hook

A hook that abstracts the `fetch api` with custom error handling, authorization, logic management, and configuration of cookies and jwt. Note: `useFetch` hook handles refreshing of jwt tokens automatically.

### Usage

`useFetch` hook returns an object that consists of the CRUD methods (get, post, put, _delete). `useFetch` can be used in 2 ways:

**1st Way (Recommended):**

```typescript
const fetch = useFetch();

const onSubmitHandler: SubmitHandler<ValidationSchema> = async formValues => {
  try {
    const readResponse = await fetch.get('/listings'); // READ
    const createResponse = await fetch.post('/listings', formValues); // CREATE
    const updateResponse = await fetch.put('/listings/1', formValues); // UPDATE
    const deleteResponse = await fetch._delete('listings/1'); // DELETE

  } catch {
    // response not ok
    // do something here
  }

}
```

**2nd Way:**

```typescript
// destructing method
const { get, post, put, _delete  } = useFetch();

const onSubmitHandler: SubmitHandler<ValidationSchema> = async formValues => {
  try {
    const readResponse = await get('/listings'); // READ
    const createResponse = await post('/listings', formValues); // CREATE
    const updateResponse = await put('/listings/1', formValues); // UPDATE
    const deleteResponse = await _delete('listings/1'); // DELETE

  } catch {
    // response not ok
    // do something here
  }

}
```

<br />

### `get` Method

#### Syntax
```typescript
fetch.get(url)
```

#### Parameters

`url`: A **string** containing the api endpoint path. For example, 'listings'.

#### Return value

A **JSON** value of the response or a **Promise** that is rejected.

<br />

### `post` Method

#### Syntax
```typescript
fetch.post(url, body)
```

#### Parameters

`url`: A **string** containing the api endpoint path. For example, 'listings'.
`body`: An **unknown** value containing form data.

#### Return value

A **JSON** value of the response or a **Promise** that is rejected.

<br />

### `put` Method

#### Syntax
```typescript
fetch.put(url, body)
```

#### Parameters

`url`: A **string** containing the api endpoint path. For example, 'listings'.
`body`: An **unknown** value containing form data.

#### Return value

A **JSON** value of the response or a **Promise** that is rejected.

<br />

### `_delete` Method

#### Syntax
```typescript
fetch._delete(url)
```

#### Parameters

`url`: A **string** containing the api endpoint path. For example, 'listings/1'.

#### Return value

A **JSON** value of the response or a **Promise** that is rejected.

