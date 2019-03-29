export class AssetLoader {
    constructor(ressources) {
        this.loader = PIXI.Loader.shared; // PixiJS exposes a premade instance for you to use.

        // Chainable `add` to enqueue a resource
        this.loader.add("bunny", "data/bunny.png")
            .add("spaceship", "assets/spritesheet.json");

        // The `load` method loads the queue of resources, and calls the passed in callback called once all
        // resources have loaded.
        this.loader.load((loader, resources) => {
        // resources.bunny.texture
        });

        // throughout the process multiple signals can be dispatched.
        this.loader.onProgress.add(() => {}); // called once per loaded/errored file
        this.loader.onError.add(() => {}); // called once per errored file
        this.loader.onLoad.add(() => {}); // called once per loaded file
        this.loader.onComplete.add(() => {}); // called once when the queued resources all load.
    }
    load(middleware) {
        this.loader.load(middleware);
    }
}
