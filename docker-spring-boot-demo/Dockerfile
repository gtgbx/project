FROM openjdk:8-jdk
 
ARG MAVEN_VERSION=3.3.9
ARG USER_HOME_DIR="/root"
 
RUN apt-get update
RUN apt-get install build-essential -y
RUN ln -sf /usr/bin/make /usr/bin/gmake
RUN mkdir -p /usr/share/maven /usr/share/maven/ref \
  && curl -fsSL http://apache.osuosl.org/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.tar.gz \
    | tar -xzC /usr/share/maven --strip-components=1 \
  && ln -s /usr/share/maven/bin/mvn /usr/bin/mvn
 
ENV MAVEN_HOME /usr/share/maven
ENV MAVEN_CONFIG "$USER_HOME_DIR/.m2"
 
VOLUME ["/usr/src/mymaven", "/root/.m2"]