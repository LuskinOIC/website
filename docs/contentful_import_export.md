# Rough Draft Documentation on Contentful data models migrations

### Sources

- [Contentful Scription Migration Doc](https://www.contentful.com/developers/docs/tutorials/cli/scripting-migrations/)
- [Git Repo](https://github.com/contentful/contentful-migration)
- [Very easy to follow guide for component clean up](https://contentful.wistia.com/medias/kkw7k4j7lp)

# Steps Taken for export/import for components:


## Install the Contentful CLI

To install the Contentful CLI globally on your machine, open a terminal and run the following command:

```bash
npm install -g contentful-cli
```

## Authenticating with Contentful

To authenticate the CLI with your Contentful account, execute:

```bash
contentful login
```

A browser window will open asking you to log in to Contentful and provide access to the CLI tool.

## Exporting Content from a Source Space

Ensure you are logged in to the Contentful CLI. If you're not, repeat the login step.

Export content from the source space by running:

```bash
contentful space export --space-id <YOUR_SPACE_ID>
```

Replace <YOUR_SPACE_ID> with your source space ID. This command will generate a JSON file with your space's content.

## Logging Out and Back In (Optional)

If needed, you can log out and then log back into the Contentful CLI:

```bash
contentful logout
contentful login
```

## Importing Content into a Target Space

Prepare the content file for import. If you've followed the steps above, you should have a JSON file named like <`contentful-export-<YOUR_SPACE_ID>.json`>.

Import the content into your target space by running:

```bash
contentful space import --space-id <YOUR_SPACE_ID> --content-file ./contentful-export-<YOUR_SPACE_ID>.json
```

Replace <YOUR_SPACE_ID> with your target space ID and adjust the file path/name as necessary based on your export file's actual name.
