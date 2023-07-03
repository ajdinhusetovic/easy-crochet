import { useLocalStorage } from "usehooks-ts"
import "./counter.scss"

export const Counter = () => {
    const [stitch, setStitch] = useLocalStorage("stitch", 0)
    const [row, setRow] = useLocalStorage("row", 0)

    // stitch functions
    const addStitches = () => {
        setStitch(stitch + 1)
    }

    const removeStitch = () => {
        if (stitch === 0) {
            alert("Stitch count cannot be less than 0!")
        } else {
            setStitch(stitch - 1)
        }
    }

    const resetStitch = () => {
        setStitch(0)
    }

    // row functions
    const addRow = () => {
        setRow(row + 1)
    }

    const removeRow = () => {
        if (row === 0) {
            alert("Row count cannot be less than 0!")
        } else {
            setRow(row - 1)
        }
    }

    const resetRow = () => {
        setRow(0)
    }

    return (
        <section>
            <div className="counter-wrapper">
                <h1>Crochet Counter</h1>
                <div className="stitch-row-wrapper">
                    <div className="stitch">
                        <div className="stitch-content">
                            <p className="stitch-label">Stitch:</p>
                            <p className="stitch-value">{stitch}</p>
                        </div>
                        <div className="buttons">
                            <button onClick={addStitches}>Add</button>
                            <button onClick={removeStitch}>Remove</button>
                            <button onClick={resetStitch}>Reset</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row-content">
                            <p className="row-label">Row:</p>
                            <p className="row-value">{row}</p>
                        </div>
                        <div className="buttons">
                            <button onClick={addRow}>Add</button>
                            <button onClick={removeRow}>Remove</button>
                            <button onClick={resetRow}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}