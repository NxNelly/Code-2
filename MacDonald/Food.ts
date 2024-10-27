namespace Farm {
    export class Food {
        public type: string;
        public storage: number;

        constructor(_type: string, _storage: number) {
            this.type = _type;
            this.storage = _storage;
        }

        update(_currentConsumption: number): number {
            const newStorage: number = this.storage - _currentConsumption;
            return newStorage;

        }
    }
}