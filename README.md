# Django React Server Side Rendering

Test project for server side rendering React within Django using
GraalVM polyglot programming.

Based on the GraalVM Java + Python polyglot example.

## Concessions

- The code quality is bad
- A lot of patching was needed
- It feels like it barely works
  - Django runs on a single thread
- I was unable to get GraalPy running and supporting
  JavaScript without running it via Java

## Requirements

- JAVA_PATH pointing at GraalVM JVM
- node
- npm
- maven

```
mvn package -Pnative
```

```
mvn package
```

```
mvn exec:exec
```

```
patch -p1 < patches/django/django.patch
```
