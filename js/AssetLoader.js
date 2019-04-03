export class AssetLoader {
    constructor(app) {
        this.loader = app.loader;
    }
    async init() {
        return new Promise((resolve, reject) => {
            $.getJSON("config/ressources.json", (assets) => {
                Object.entries(assets).forEach(([key, value]) => {
                    this.loader.add(key, value);
                });
                // once all resources are loaded
                this.loader.load((loader, resources) => {
                    resolve(resources);
                });

                // called once per loaded/errored file
                this.loader.onProgress.add((...args) => {
                    // console.log(`onProgress`, args);
                });

                // called once per errored file
                this.loader.onError.add((...args) => {
                    console.log(`onError`, args);
                    reject(args);
                });

                // called once per loaded file
                this.loader.onLoad.add((...args) => {
                    // console.log(`onLoad`, args);
                });

                // called once when the queued resources all load.
                this.loader.onComplete.add((...args) => {
                    // console.log(`onComplete`, args);
                });
            });
        });
    }
}
