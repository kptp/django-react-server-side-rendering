# Django React Server Side Rendering

Test project for server side rendering React within Django using
GraalVM polyglot programming.

Based on the GraalVM Java + Python polyglot example.

## Concessions

- The code quality is bad
- A lot of patching was needed
- It feels like it barely works
  - Django runs on a single thread
  - Django does not refresh on code changes
- I was unable to get GraalPy running and supporting
  JavaScript without running it via Java

## Requirements

- JAVA_PATH pointing at GraalVM JVM
- node
- npm
- maven

## Running

Run `npm install` and `npm build` in the `react-ssr` folder.

Copy the resulting `react-ssr/dist/client-bundle.js` to `src/main/resources/vfs/proj/static/client-bundle.js`

Run `mvn package`

Somehow apply the patch in `patches/django/django.patch`. You can for example use `patch` pip package.

Run `mvn exec:exec`

The React app should be SSR'd and hydrated when you open `http://localhost:8000/?user=weee`

### Patch example

```
patch -p1 < patches/django/django.patch
```

## Packaging for Native might work

```
mvn package -Pnative
```
