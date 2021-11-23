import { useState } from "react"
import { getDefaultTitleField, getDefaultDateTakenField, getDefaultGPSField, getDefaultResolutionField } from "../factory/fieldFactory"
import { TitleField, DateTakenField, GPSField, ResolutionField } from "../types/fields"
import { RawPhoto, RerankedPhoto } from "../types/photo"

export default class Store {
    private titleState: [TitleField, React.Dispatch<React.SetStateAction<TitleField>>]
    private resolutionState: [ResolutionField, React.Dispatch<React.SetStateAction<ResolutionField>>]
    private dateTakenState: [DateTakenField, React.Dispatch<React.SetStateAction<DateTakenField>>]
    private gpsState: [GPSField, React.Dispatch<React.SetStateAction<GPSField>>]

    private photos: [Array<RawPhoto>, React.Dispatch<React.SetStateAction<Array<RawPhoto>>>]
    private rerankedPhotos: [Array<RerankedPhoto>, React.Dispatch<React.SetStateAction<Array<RerankedPhoto>>>]

    //Init fields
    constructor() {
        this.titleState = useState<TitleField>(getDefaultTitleField())
        this.resolutionState = useState<ResolutionField>(getDefaultResolutionField())
        this.dateTakenState = useState<DateTakenField>(getDefaultDateTakenField())
        this.gpsState = useState<GPSField>(getDefaultGPSField())
        this.photos = useState<Array<RawPhoto>>([])
        this.rerankedPhotos = useState<Array<RerankedPhoto>>([])
    }

    //Getters, setters
    getTitle()                          {return this.titleState[0];}
    setTitle(newTitle: TitleField)     {this.titleState[1](newTitle)}
    getResolution()                      {return this.resolutionState[0];}
    setResolution(newRes: ResolutionField){this.resolutionState[1](newRes)}
    getDateTaken()                       {return this.dateTakenState[0];}
    setDateTaken(newDate: DateTakenField) {this.dateTakenState[1](newDate)}
    getGPS()                             {return this.gpsState[0];}
    setGPS(newGPS: GPSField)              {this.gpsState[1](newGPS)}

    getPhotos()                          {return this.photos[0];}
    setPhotos(newPhotos: Array<RawPhoto>){this.photos[1](newPhotos)}

    //Reset fields
    resetAll() {
        this.resetAll()
        this.resetPhotos()
    }
    resetPhotos() {
        this.setPhotos([])
    }
    resetForm() {
        this.setTitle(getDefaultTitleField())
        this.setResolution(getDefaultResolutionField())
        this.setDateTaken(getDefaultDateTakenField())
        this.setGPS(getDefaultGPSField())
    }
}