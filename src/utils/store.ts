import { useState } from "react"
import { getDefaultAuthorForm, getDefaultDateTakenForm, getDefaultGPSForm, getDefaultResolutionForm } from "../factory/fieldFactory"
import { AuthorField, DateTakenField, GPSField, ResolutionField } from "../types/fields"
import { RawPhoto, RerankedPhoto } from "../types/photo"

export default class Store {
    private authorState: [AuthorField, React.Dispatch<React.SetStateAction<AuthorField>>]
    private resolutionState: [ResolutionField, React.Dispatch<React.SetStateAction<ResolutionField>>]
    private dateTakenState: [DateTakenField, React.Dispatch<React.SetStateAction<DateTakenField>>]
    private gpsState: [GPSField, React.Dispatch<React.SetStateAction<GPSField>>]

    private photos: [Array<RawPhoto>, React.Dispatch<React.SetStateAction<Array<RawPhoto>>>]
    private rerankedPhotos: [Array<RerankedPhoto>, React.Dispatch<React.SetStateAction<Array<RerankedPhoto>>>]

    //Init fields
    constructor() {
        this.authorState = useState<AuthorField>(getDefaultAuthorForm())
        this.resolutionState = useState<ResolutionField>(getDefaultResolutionForm())
        this.dateTakenState = useState<DateTakenField>(getDefaultDateTakenForm())
        this.gpsState = useState<GPSField>(getDefaultGPSForm())
        this.photos = useState<Array<RawPhoto>>([])
        this.rerankedPhotos = useState<Array<RerankedPhoto>>([])
    }

    //Getters, setters
    getAuthor()                          {return this.authorState[0];}
    setAuthor(newAuthor: AuthorField)     {this.authorState[1](newAuthor)}
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
        this.setAuthor(getDefaultAuthorForm())
        this.setResolution(getDefaultResolutionForm())
        this.setDateTaken(getDefaultDateTakenForm())
        this.setGPS(getDefaultGPSForm())
    }
}