import React from "react";
import { BsFolder } from "react-icons/bs";
import { BsFileZip } from "react-icons/bs";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";
import { BsApp } from "react-icons/bs";
import { BsFiletypeExe } from "react-icons/bs";
import { BsFiletypeMp3 } from "react-icons/bs";

const DataTable = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label className="">
                  <input type="checkbox" className="checkbox bg-gray-300" />
                </label>
              </th>
              <th>Name</th>
              <th>Size</th>
              <th>Status</th>
              <th>Time Left</th>
              <th>Last Modifications</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox bg-gray-300" />
                </label>
              </th>
              <td>
                <div className="flex items-center">
                  <div>
                    <BsFolder className="mr-3" />
                  </div>
                  <div>
                    <div className="">UIUXMonster.png</div>
                    <div className="text-sm opacity-50">Image</div>
                  </div>
                </div>
              </td>
              <td>745KB</td>
              <td>Complete</td>
              <th>0 Sec</th>
              <td>2023/08/09</td>
            </tr>

            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox bg-gray-300" />
                </label>
              </th>
              <td>
                <div className="flex items-center">
                  <div>
                    <BsFiletypeMp3 className="mr-3" />
                  </div>
                  <div>
                    <div className="font-bold">2PacCover.mp3</div>
                    <div className="text-sm opacity-50">Music</div>
                  </div>
                </div>
              </td>
              <td>3.00 MB</td>
              <td>Complete</td>
              <th>0 Sec</th>
              <td>2023/08/09</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox bg-gray-300" />
                </label>
              </th>
              <td>
                <div className="flex items-center">
                  <div>
                    <BsFileZip className="mr-3" />
                  </div>
                  <div>
                    <div className="font-bold">UIUXMonster.zip</div>
                    <div className="text-sm opacity-50">Archieve</div>
                  </div>
                </div>
              </td>
              <td>12.00 MB</td>
              <td>Complete</td>
              <th>0 Sec</th>
              <td>2023/08/09</td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox bg-gray-300" />
                </label>
              </th>
              <td>
                <div className="flex items-center">
                  <div>
                    <BsFileEarmarkPdf className="mr-3" />
                  </div>
                  <div>
                    <div className="font-bold">Details.pdf</div>
                    <div className="text-sm opacity-50">Document</div>
                  </div>
                </div>
              </td>
              <td>2 MB</td>
              <td>Complete</td>
              <th>5 minutes 12 Sec</th>
              <td>2023/08/09</td>
            </tr>
            {/* row 5 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox bg-gray-300" />
                </label>
              </th>
              <td>
                <div className="flex items-center">
                  <div>
                    <BsCameraVideo className="mr-3" />
                  </div>
                  <div>
                    <div className="font-bold">BetterCallSaul.video</div>
                    <div className="text-sm opacity-50">Video</div>
                  </div>
                </div>
              </td>
              <td>2.5 GB</td>
              <td>Complete</td>
              <th>0 Sec</th>
              <td>2023/08/09</td>
            </tr>
            {/* row 6 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox bg-gray-300" />
                </label>
              </th>
              <td>
                <div className="flex items-center">
                  <div>
                    <BsApp className="mr-3" />
                  </div>
                  <div>
                    <div className="font-bold">CallOfDuty.apk</div>
                    <div className="text-sm opacity-50">App</div>
                  </div>
                </div>
              </td>
              <td>12.00 MB</td>
              <td>Paused</td>
              <th>0 Sec</th>
              <td>2023/08/09</td>
            </tr>
            {/* row 7 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox bg-gray-300" />
                </label>
              </th>
              <td>
                <div className="flex items-center">
                  <div>
                    <BsFiletypeMp3 className="mr-3" />
                  </div>
                  <div>
                    <div className="font-bold">2PacCover.mp3</div>
                    <div className="text-sm opacity-50">Music</div>
                  </div>
                </div>
              </td>
              <td>3.00 MB</td>
              <td>Complete</td>
              <th>0 Sec</th>
              <td>Today</td>
            </tr>
            {/* row 8 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox bg-gray-300" />
                </label>
              </th>
              <td>
                <div className="flex items-center">
                  <div>
                    <BsFiletypeExe className="mr-3" />
                  </div>
                  <div>
                    <div className="font-bold">Mima.exe</div>
                    <div className="text-sm opacity-50">Program</div>
                  </div>
                </div>
              </td>
              <td>32 MB</td>
              <td>Paused</td>
              <th>1minutes 1 Sec</th>
              <td>2023/08/09</td>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Select All</th>
              <th></th>
              <th></th>
              <th>Speed Test</th>
              <th>10.55 Mbs</th>
              <th>6.30 Mbs</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
