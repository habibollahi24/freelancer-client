import { useCategoryList } from "../../hook/useCategoryList";
import ButtonGroupFilter from "../../ui/ButtonGroupFilter";
import SelectFilter from "../../ui/SelectFilter";

function FilterContainer() {
  const { data } = useCategoryList();
  const categoryValue = data || [];

  return (
    <div className="flex flex-row-reverse flex-nowrap items-center space-x-3 overflow-x-auto py-5 text-sm">
      <div>
        <SelectFilter
          by="category"
          options={[
            { englishTitle: "ALL", label: "دسته بندی(همه)" },
            ...categoryValue,
          ]}
        />
      </div>
      <div>
        <SelectFilter
          by="sort"
          options={[
            { englishTitle: "latest", label: "مرتب سازی (جدیدترین)" },
            { englishTitle: "earliest", label: " مرتب سازی(قدیمی ترین)" },
          ]}
        />
      </div>
      <div>
        <ButtonGroupFilter />
      </div>
    </div>
  );
}

export default FilterContainer;
