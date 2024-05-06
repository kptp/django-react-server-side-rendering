This simple project is meant as a jumping off point for a polyglot Python Java application on GraalVM.

To build a standalone native executable you need to use a [GraalVM JDK with Native Image](https://www.graalvm.org/downloads/) and run:

```
mvn package -Pnative
```

```
mvn package -Pnative
```

```
mvn exec:exec
```

```
patch -p1 < patches/django/django.patch
```

PATH

- Add correct graalvm JVM
- Add graalpy bin

kyosti@kyosti-ThinkPad-T480:~/Python/test-graalpy/test$ echo $PATH
/home/kyosti/graalvm-jdk-22.0.1+8.1/bin:/home/kyosti/.nvm/versions/node/v20.9.0/bin:/home/kyosti/.cargo/bin:/home/kyosti/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin:/home/kyosti/.dotnet/tools:/usr/lib/jvm/java-8-oracle/bin:/usr/lib/jvm/java-8-oracle/db/bin:/usr/lib/jvm/java-8-oracle/jre/bin:/home/kyosti/.local/bin:/home/kyosti/skripteja:/home/kyosti/.unison-install:/home/kyosti/.local/bin:/home/kyosti/scripts:/home/kyosti/apache-maven-3.9.6/bin:/home/kyosti/graalpy-community-24.0.1-linux-amd64/bin
kyosti@kyosti-ThinkPad-T480:~/Python/test-graalpy/test$ echo $JAVA_HOME
/home/kyosti/graalvm-jdk-22.0.1+8.1
