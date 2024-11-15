org.rusherhack.client.api.IRusherHack

# IRusherHack

```java
public interface IRusherHack {
	IEventBus getEventBus();
	IFeatureManager<IModule> getModuleManager();
	ICommandManager getCommandManager();
	IHudManager getHudManager();
	IWindowManager getWindowManager();
	IThemeManager getThemeManager();
	IBindManager getBindManager();
	IRelationManager getRelationManager();
	IRotationManager getRotationManager();
	INotificationManager getNotificationManager();
	IChunkProcessor getChunkProcessor();
	IServerState getServerState();
	IInteractions interactions();
	ILogger createLogger(String name);
	String getVersion();
	Path getConfigPath();
	IRenderer2D getRenderer2D();
	IRenderer3D getRenderer3D();
	Fonts fonts();
	Colors colors();
	Entities entities();
}
```

---

### Methods

---

#### `getEventBus`

- **Type:** [`IEventBus`](irusherhack.md)
- **Description:** Returns the event bus instance

### `getModuleManager`

- **Type:** [`IFeatureManager<IModule>`](irusherhack.md)
- **Description:** Returns the module manager instance

### `getCommandManager`

- **Type:** [`ICommandManager`](irusherhack.md)
- **Description:** Returns the command manager instance

### `getHudManager`

- **Type:** [`IHudManager`](irusherhack.md)
- **Description:** Returns the HUD manager instance

### `getWindowManager`

- **Type:** [`IWindowManager`](irusherhack.md)
- **Description:** Returns the window manager instance

### `getThemeManager`

- **Type:** [`IThemeManager`](irusherhack.md)
- **Description:** Returns the theme manager instance

### `getBindManager`

- **Type:** [`IBindManager`](irusherhack.md)
- **Description:** Returns the bind manager instance

### `getRelationManager`

- **Type:** [`IRelationManager`](irusherhack.md)
- **Description:** Returns the relation manager instance

### `getRotationManager`

- **Type:** [`IRotationManager`](irusherhack.md)
- **Description:** Returns the rotation manager instance

### `getNotificationManager`

- **Type:** [`INotificationManager`](irusherhack.md)
- **Description:** Returns the notification manager instance

### `getChunkProcessor`

- **Type:** [`IChunkProcessor`](irusherhack.md)
- **Description:** Returns the chunk processor instance

### `getServerState`

- **Type:** [`IServerState`](irusherhack.md)
- **Description:** Returns the server state instance

### `interactions`

- **Type:** [`IInteractions`](irusherhack.md)
- **Description:** Returns the interactions instance

### `createLogger`

- **Type:** [`ILogger`](irusherhack.md)
- **Description:** Creates a new logger with the specified name
- **Parameters:**

| Type     | Name   | Description            |
|----------|--------|------------------------|
| `String` | `name` | The name of the logger |

- **Usage:**
  ```java
  ILogger logger = RusherHackAPI.createLogger("My Plugin");
        
  logger.info("Hello, world!");
  logger.warn("This is a warning!");
  logger.error("This is an error!");
  logger.debug("This is a debug message!");
  ```
- **See:** [org.rusherhack.core.logging.Logger]() & [org.rusherhack.core.logging.ILogger]()

### `getVersion`

- **Type:** `String`
- **Description:** Returns the version of the client

### `getConfigPath`

- **Type:** `Path`
- **Description:** Returns the path to the configuration directory

### `getRenderer2D`

- **Type:** [`IRenderer2D`](irusherhack.md)
- **Description:** Returns the 2D renderer instance

### `getRenderer3D`

- **Type:** [`IRenderer3D`](irusherhack.md)
- **Description:** Returns the 3D renderer instance

### `fonts`

- **Type:** [`Fonts`](irusherhack.md)
- **Description:** Contains methods for accessing general font renderer instances
- **See:** [Fonts](#fonts)

### `colors`

- **Type:** [`Colors`](irusherhack.md)
- **Description:** Allows access to the user's color preferences, as well as entities most prominent color
- **See:** [Colors](#colors)

### `entities`

- **Type:** [`Entities`](irusherhack.md)
- **Description:** Contains methods for determining the type of an entity
- **See:** [Entities](#entities)

---
