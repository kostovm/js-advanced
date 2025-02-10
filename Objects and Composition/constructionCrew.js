function constructionCrew(objWorker) {

    let workerInfo = { ...objWorker };

    if (!objWorker.dizziness) {
        console.log(objWorker);
        return objWorker;
    } else {
        workerInfo.levelOfHydrated += 0.1 * objWorker.weight * objWorker.experience;
        workerInfo.dizziness = false;
        return workerInfo;
    }
}
