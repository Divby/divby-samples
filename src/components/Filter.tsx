const Filter = () => {

  
    return (
        <div className="mt-12 flex justify-between">
            <div className="flex gap-6 flex-wrap">
                <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                    <option value="">Type</option>
                    <option value="samples">Samples</option>
                    <option value="presets">Presets</option>
                </select>
                <input type="text" name="min" placeholder="min price" id="" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />
                <input type="text" name="max" placeholder="max price" id="" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400" />
                <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                    <option value="">Type</option>
                    <option value="samples">Samples</option>
                    <option value="presets">Presets</option>
                </select>
                <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                    <option value="">Type</option>
                    <option value="samples">Samples</option>
                    <option value="presets">Presets</option>
                </select>
                <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                    <option value="">Type</option>
                    <option value="samples">Samples</option>
                    <option value="presets">Presets</option>
                </select>
            </div>
            <div className="">
                <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
                    <option>Sort By</option>
                    <option value="">Price (low to high)</option>
                    <option value="">Price (high to low)</option>
                    <option value="">Newest</option>
                    <option value="">Oldest</option>
                </select>
            </div>
        </div>
    )
}

export default Filter