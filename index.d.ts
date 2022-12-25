declare module 'dymojs' {
	export = Dymo
}

type DymoOptions = {
	hostname?: Dymo['hostname']
	port?: Dymo['port']
	printerName?: Dymo['printerName']
}

type DymoResponse = 'true' | 'false'

declare class Dymo {
	constructor(options?: DymoOptions)

	hostname: string
	port: number
	printerName: string

	get apiUrl(): string

	print(
		printerName: Dymo['printerName'],
		labelXml: string,
		copies?: number,
		printQuality?: 'Auto' | 'Text' | 'BarcodeAndGraphics',
		labelSetXml?: string
	): Promise<DymoResponse>
	renderLabel(labelXml: string): Promise<string>
	getStatus(): Promise<DymoResponse>
	getPrinters(): Promise<DymoResponse>
}

