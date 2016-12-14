export class FilterBinding {

    public mowerType: string = "";
    public mowerBrand: string = "";
    public mowerColor: string = "";

    public mowerCutwidth: number = 0;
    public mowerPerf: number = 0;
    public mowerWeight: number = 0;

    public get type(): string {
        return this.mowerType;
    }
    public get brand(): string {
        return this.mowerBrand;
    }
    public get color(): string {
        return this.mowerColor;
    }

    public get weight(): number {
        return this.mowerWeight;
    }

    public get cutwidth(): number {
        return this.mowerCutwidth;
    }

    public get perf(): number {
        return this.mowerPerf;
    }
}