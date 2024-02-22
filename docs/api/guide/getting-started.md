# Getting Started

::: warning
Plugins are in BETA and are not fully supported. DO NOT enable plugins if you don't know what you are doing.
:::

To enable plugins, add the jvm flag: `-Drusherhack.enablePlugins=true`, create a folder
called `plugins` in the `.minecraft/rusherhack` folder, and drop plugin .jar files into it.

## Installation

### Prerequisites

- [Java](https://nodejs.org/) version 17 or higher.
- An ide or text editor. Below are some recommended ones:
  - [IntelliJ IDEA](https://www.jetbrains.com/idea/)
  - [VSCode](https://code.visualstudio.com/)

::: code-group

```sh [https]
$ git clone https://github.com/RusherDevelopment/example-plugin.git
```

```sh [ssh]
$ git clone git@github.com:RusherDevelopment/example-plugin.git
```

```sh [Github CLI]
$ gh repo clone RusherDevelopment/example-plugin
```

:::

## File Structure

When you clone the repository, you should see the following file structure:

```
.
├─ gradle/wrapper
│  ├─ gradle-wrapper.jar
│  └─ gradle-wrapper.properties
├─ src/main
│  ├─ java
│  │  └─ org/example
│  │     └─ ExampleCommand.java
│  │     └─ ExampleHudElement.java
│  │     └─ ExampleModule.java
│  │     └─ ExamplePlugin.java
│  └─ resources
│     └─ rusherhack-plugin.json
│     └─ exampleplugin/graphics
│        └─ rh_head.png
├─ .gitignore
├─ LICENSE
├─ build.gradle
├─ gradlew
├─ gradlew.bat
└─ settings.gradle
```

This is the basic file structure of the plugin. You can add more files and folders as you see fit.

## The Config File

All of your plugins information is stored in the `rusherhack-plugin.json` file. This file is used to identify your plugin and provide information to the user and the client.


```json
// .src/main/resources/rusherhack-plugin.json
{
  "Plugin-Class": "org.example.ExamplePlugin",
  "Name": "Example Plugin",
  "Version": "${plugin_version}",
  "Description": "Example rusherhack plugin",
  "Authors": [
    "John200410"
  ],
  "Minecraft-Versions": [
    "1.20.1"
  ]
}
```
