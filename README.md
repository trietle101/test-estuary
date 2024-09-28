### Entrance test Estuary

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/test-estuary.git
cd test-estuary
```

### 2. Install Dependencies

Install all necessary dependencies for the Vite React app and the local `json-server`.

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn install
```

### 3. Start JSON Server

Since `json-server` is installed locally, you'll need to run it from `node_modules` using an npm script.

In `package.json`, the following script has been added:

```json
"scripts": {
  "serve-json": "json-server --watch db.json --port 3000"
}
```

To start the `json-server`:

Using npm:

```bash
npm run serve-json
```

Using yarn:

```bash
yarn serve-json
```

This will use the `db.json` file in the current directory to serve your API at `http://localhost:3000`.

### 4. Start Vite React App

Once the `json-server` is running, start the Vite development server.

Using npm:

```bash
npm run dev
```

Using yarn:

```bash
yarn dev
```

The Vite development server should now be running at `http://localhost:3000`.
