interface Developer <T, X=null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear:number;
    };

    smartWatch: T;
    bike?:X
}

type BrandCharaWatch = {
    heartRate:string;
    stopwatch: boolean;
}


const poorDeveloper:Developer<BrandCharaWatch, {
    model: "Yamaha",
    engineCapacity: '200cc'
}> = {
    name:"Mr. Poor",
    salary:20000,
    device: {
        brand: "lenovo",
        model: 'A21',
        releasedYear: 2020
    },

    smartWatch: {
        heartRate: '200',
        stopwatch: true
    }
}

interface AppleWatch {
    heartRate:string;
    callSuport: boolean;
    calculator: boolean;
    AiFeature: boolean;
}

const richDeveloper:Developer<AppleWatch> = {
    name:"Mr. Rich",
    salary:100000,
    device: {
        brand: "hp",
        model: 'X34',
        releasedYear: 2050
    },

    smartWatch: {
        heartRate: '200',
        calculator: true,
        callSuport: true,
        AiFeature:true
    }
}