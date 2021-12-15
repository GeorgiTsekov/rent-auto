const UseCarData = (carData) => {
    let remoteCentralLocking = carData.remoteCentralLocking ? 1 : 0;
    let audioInput = carData.audioInput ? 1 : 0;
    let childSeat = carData.childSeat ? 1 : 0;
    let music = carData.music ? 1 : 0;
    let onboardComputer = carData.onboardComputer ? 1 : 0;
    let airConditioner = carData.airConditioner ? 1 : 0;
    let bluetooth = carData.bluetooth ? 1 : 0;
    let gps = carData.gps ? 1 : 0;

    return { ...carData, remoteCentralLocking, audioInput, childSeat, music, onboardComputer, airConditioner, bluetooth, gps }
}

export default UseCarData;