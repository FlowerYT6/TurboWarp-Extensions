class Flower_r4sr0 {
    getInfo() {
        return {
            id: 'flowerr4sr0',
            name: 'Flower_r4sr0',
            color1: '#FFD700',
            blocks: [
                {
                    opcode: 'flashVar',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set [VAR] to 1, wait [TIME] seconds, set [VAR] to 0',
                    arguments: {
                        VAR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'myVariable'
                        },
                        TIME: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'getFPS',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'FPS'
                }
            ]
        };
    }

    async flashVar(args, util) {
        const variable = util.target.lookupVariableByName(args.VAR);
        if (!variable) {
            console.warn(`Variable "${args.VAR}" not found.`);
            return;
        }

        variable.value = 1;
        await new Promise(resolve => setTimeout(resolve, args.TIME * 1000));
        variable.value = 0;
    }

    getFPS() {
        try {
            return Scratch.vm.runtime.frameLoop.framerate;
        } catch (e) {
            console.warn('FPS access failed:', e);
            return 0;
        }
    }
}

if (typeof Scratch !== 'undefined') {
    Scratch.extensions.register(new Flower_r4sr0());
}
